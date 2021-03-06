import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { isPlatformBrowser } from '@angular/common';
import { SnackBar, SnackBarNotification } from './services/snack-bar.service';
import { WindowRef } from './window-ref.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private snackBarService: SnackBar,
        private windowRef: WindowRef,
        private swUpdate: SwUpdate,
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang(this.translate.getBrowserLang());
    }

    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        if (this.swUpdate.isEnabled) {
            this.swUpdate.activated.subscribe(() => {
                console.log('activated');
            });
            // this.swUpdate.activated.filter(() => !localStorage.getItem('cached')).subscribe(() => {
            //     localStorage.setItem('cached', 'displayed');
            //     this.snackBarService.displayNotification({
            //         message: 'Content is cached', action: 'Ok'
            //     } as SnackBarNotification);
            // });

            this.swUpdate.available.subscribe((evt) => {
                this.snackBarService.displayNotification({
                    message: 'New version of app is available!',
                    action: 'Launch',
                    force: true,
                    callback: () => {
                        this.windowRef.nativeWindow.location.reload(true);
                    }
                } as SnackBarNotification);
            });

            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }
    }
}

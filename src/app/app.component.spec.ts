// import { AppComponent } from './app.component';
// import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { SnackBarService } from './services/snack-bar.service';
// import * as sinon from 'sinon';
// import { WindowRef } from './windowRef';
// import { SwUpdate } from '@angular/service-worker';
// import { UpdateActivatedEvent, UpdateAvailableEvent } from '@angular/service-worker/src/low_level';
// import { Subject } from 'rxjs/Subject';
// import Spy = jasmine.Spy;
//
// let fixture: ComponentFixture<AppComponent>;
// let windowStub;
// let snackBarServiceStub;
// let swUpdateStub;
// let checkForUpdatePromise: Promise<void>;
// let activateUpdatePromise: Promise<void>;
//
// const updates: Subject<UpdateAvailableEvent> = new Subject();
// const activated: Subject<UpdateActivatedEvent> = new Subject();
//
// xdescribe('App component', () => {
//     beforeEach(async(() => {
//         swUpdateStub = sinon.createStubInstance(SwUpdate);
//         swUpdateStub.checkForUpdate.returns(new Promise((resolve) => resolve()));
//         swUpdateStub.activateUpdate.returns(new Promise((resolve) => resolve()));
//         swUpdateStub.available = updates;
//         swUpdateStub.activated = activated;
//
//         windowStub = sinon.createStubInstance(WindowRef);
//         windowStub._window = {
//             navigator: {
//                 userAgent: 'test'
//             },
//             location: {
//                 reload: () => { const sth = 1 + 1; }
//             }
//         };
//
//         snackBarServiceStub = sinon.createStubInstance(SnackBarService);
//
//         TestBed.configureTestingModule({
//             declarations: [AppComponent],
//             imports: [RouterTestingModule],
//             providers: [
//                 {provide: WindowRef, useValue: windowStub},
//                 {provide: SwUpdate, useValue: swUpdateStub},
//                 {provide: SnackBarService, useValue: snackBarServiceStub}
//             ],
//             schemas: [ NO_ERRORS_SCHEMA ]
//         });
//
//         fixture = TestBed.createComponent(AppComponent);
//         fixture.detectChanges();
//     }));
//
//     it('Should contain header, menu and footer', () => {
//         expect(fixture.debugElement.query(By.css('menu'))).toBeDefined();
//         expect(fixture.debugElement.query(By.css('h1'))).toBeDefined();
//         expect(fixture.debugElement.query(By.css('footer'))).toBeDefined();
//     });
//
//     it('Should check for service worker update when application is initialized, and install update', async(() => {
//         expect(swUpdateStub.checkForUpdate.calledOnce).toBe(true, 'Check for update method was not called.');
//         // expect(swUpdateStub.activateUpdate.called).toBe(true, 'Activate update method was not called.');
//     }));
//
//     it('Should display notification when service worker update is done', () => {
//         updates.next({current: {hash: 'asdf'}, available: {hash: 'fdsa'}} as UpdateAvailableEvent);
//         expect(snackBarServiceStub.displayNotification.called).toBe(true, 'Snack bar was not displayed');
//         expect(snackBarServiceStub.displayNotification.calledOnce).toBe(true, 'Snack bar was displayed more then once');
//     });
//
//     it('Update snackbar should contain page reload as a callback', () => {
//         updates.next({current: {hash: 'asdf'}, available: {hash: 'fdsa'}} as UpdateAvailableEvent);
//         const spy = sinon.spy(windowStub._window.location, 'reload');
//         snackBarServiceStub.displayNotification.getCall(0).args[0].callback();
//         expect(spy.called).toBeTruthy('Reload method was not called');
//     });
//
//     xit( 'Should display notification about cached content', () => {
//         activated.next({current: {hash: 'asdf'}} as UpdateActivatedEvent);
//         expect(snackBarServiceStub.displayNotification.called).toBe(true, 'Notification was not displayed');
//     });
//
//     xit('Should display notification about cached content only once', () => {
//         localStorage.clear();
//         activated.next({current: {hash: 'asdf'}} as UpdateActivatedEvent);
//         activated.next({current: {hash: 'asdf'}} as UpdateActivatedEvent);
//         expect(snackBarServiceStub.displayNotification.called).toBe(true, 'Notification was not displayed');
//         expect(snackBarServiceStub.displayNotification.calledOnce).toBe(true, 'Notification was not displayed once');
//     });
// });

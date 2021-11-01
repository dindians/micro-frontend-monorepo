import {Routes} from "@angular/router";
import {loadRemoteModule} from "@angular-architects/module-federation";
import {environment} from "../environments/environment";

export const APP_ROUTES: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'mfe1-log-message-tester',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4001/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: 'LogMessageTester'
    })
    .then(m => { consoleLog('returning m.LogMessageTesterModule'); consoleLog(m); return m.LogMessageTesterModule; })
    .catch(err => console.log('Oh no!', err))
    .finally(() => consoleLog('remote LogMessageTester loaded from path mfe1-log-message-tester'))
  },
  { path: 'mfe1-log-messages',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4001/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: 'LogMessages'
    })
      .then(m => { consoleLog('returning m.LogMessagesModule'); consoleLog(m); return m.LogMessagesModule; })
      .catch(err => console.log('Oh no!', err))
      .finally(() => consoleLog('remote LogMessages loaded from path mfe1-log-messages'))
  },
];

function consoleLog(message?: any) {
  if(environment.production) return;
  switch (typeof message) {
    case "undefined":
      return;
    case "function":
      console.log(message);
      return;
    case "object":
      console.log(message);
      return;
    default:
      console.log('[app.routes.ts] ' + message);
      return;
  }
}

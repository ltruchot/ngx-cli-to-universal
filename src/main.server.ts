import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server';
import { AppServerModuleNgFactory } from './ngfactory/src/app/app.server.ngfactory';
import { ngExpressEngine } from './express-engine';
import * as express from 'express';
import * as path from 'path';

enableProdMode();

const app = express();

// use angular html resolver
app.engine('html', ngExpressEngine({
  baseUrl: 'http://localhost:4200',
  bootstrap: [AppServerModuleNgFactory]
}));
app.set('port', 8000);
app.set('view engine', 'html');
app.set('views', 'src');


// static routes (assets folder)
app.use('/assets', express.static(__dirname + '/assets'));
// server routes
app.get('/', (req, res) => {
  res.render('index', {req});
});
app.get('/articles', (req, res) => {
  res.render('index', {req});
});
app.get('/article/*', (req, res) => {
  res.render('index', {req});
});
app.get('/login', (req, res) => {
  res.render('index', {req});
});
app.get('/moment', (req, res) => {
  res.render('index', {req});
});

app.listen(app.get('port'), () => {
  console.log(`listening on port ${ app.get('port') }...`);
});

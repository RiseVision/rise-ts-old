"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request-promise");
var delegates_1 = require("./publicapiv2/delegates");
var accounts_1 = require("./publicapiv2/accounts");
var loader_1 = require("./publicapiv2/loader");
var multiSignatures_1 = require("./publicapiv2/multiSignatures");
var peers_1 = require("./publicapiv2/peers");
var signatures_1 = require("./publicapiv2/signatures");
var requester = function (obj, cback) {
    obj.url = "http://192.168.64.3:5566/api" + obj.path;
    obj.json = true;
    return request(obj)
        .then(function (resp) {
        if (resp.success == false) {
            return Promise.reject(resp.error);
        }
        return resp;
    })
        .then(function (a) {
        if (typeof (cback) !== 'undefined') {
            cback(null, a);
        }
        return a;
    })
        .catch(function (err) {
        if (typeof (cback) !== 'undefined') {
            cback(err);
        }
        return Promise.reject(err);
    });
};
var secret = 'pitch delay owner can budget excess roast piece edit bicycle collect lecture';
var delegate = new delegates_1.Delegates(requester);
var account = new accounts_1.Accounts(requester);
var loader = new loader_1.Loader(requester);
var ms = new multiSignatures_1.MultiSignatures(requester);
// ms.getAccounts('af77750c7660a8b4a187688702d241bf6318b025ee2aae1f7abddd6444239dad').then(console.log);
var peers = new peers_1.Peers(requester);
peers.getList({ limit: 2 }).then(console.log);
peers.version().then(console.log);
peers.getByIPPort({ ip: '31.14.133.101', port: 5566 }).then(console.log);
var signatures = new signatures_1.Signatures(requester);
signatures.add({ secret: secret }).then(console.log);
// loader.syncStatus().then(console.log);
//
// account.getAccount('9857707766596718725R').then(console.log)
// delegate.getVoters('af77750c7660a8b4a187688702d241bf6318b025ee2aae1f7abddd6444239dad').then(console.log);
// delegate.toggleForging({secret, enable: false}).then(console.log).catch(console.error);
// delegate.getByKeyVal('username', 'elbuch')
//   .then(d => delegate.getForgedByAccount(d.delegate.publicKey))
//   .then(console.log);
// delegate.getForgedByAccount('e29ceb81b7dc93fb657b65172a919d7a2be0f2ca761cb585c30bbfe172d0a6c8').then(console.log)
// delegate.getByKeyVal('username','elbuch').then(console.log)
// delegate.getList({limit:1, orderBy: 'missedblocks'})
//   .then(res => res.delegates)
//   .then(console.log);
// acc.enable({
//   secret: 'pitch delay owner can budget excess roast piece edit bicycle collect lecture',
//   username: 'briccobau'
// })
//   .then(console.log) 

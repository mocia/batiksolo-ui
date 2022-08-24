import { Aurelia, inject, computedFrom } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';
import { AuthStep } from './utils/auth-step';
import routes from './routes/index';

@inject(AuthService)

export class App {
  constructor(authService) {
    this.authService = authService;
  }
  configureRouter(config, router) {
    config.title = '';
    config.addPipelineStep('authorize', AuthStep);

    // var routes = [
    //   { route: 'login', name: 'login', moduleId: './login', nav: true, title: 'login' },
    //   { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: false, title: 'Welcome', auth: true },
    //   { route: 'samples', name: 'samples', moduleId: './samples/index', nav: true, title: 'Samples' },
    //   { route: 'forbidden', name: 'forbidden', moduleId: './forbidden', nav: false, title: 'forbidden' },
    //   { route: 'bts-tb-bbt', name: 'bts-tb-bbt', moduleId: './modules/bts-tb-bbt-cr/index', nav: true, title: 'Pemasukan Barang Jadi', auth: true, settings: { group: "toko", roles: ["admin"] } },
    //   { route: 'bts-tb-bat', name: 'bts-tb-bat', moduleId: './modules/bts-tb-bat-cr/index', nav: true, title: 'Pemasukan Embalase', auth: true, settings: { group: "toko", roles: ["admin"] } },
    //   { route: 'bts-kb-rtp', name: 'bts-kb-rtp', moduleId: './modules/bts-kb-rtp-cr/index', nav: true, title: 'Retur Barang Ke Pusat', auth: true, settings: { group: "toko", roles: ["admin"] } },
    //   { route: 'upload-file-pbj', name: 'upload-file-pbj', moduleId: './modules/upload-file-pbj/index', nav: true, title: 'Upload Packing List Barang Jadi ke Toko', auth: true, settings: { group: "gudang pusat", roles: ["admin"] } },
    //   { route: 'upload-file-pba', name: 'upload-file-pba', moduleId: './modules/upload-file-pba/index', nav: true, title: 'Upload Packing List Embalase ke Toko', auth: true, settings: { group: "gudang pusat", roles: ["admin"] } },
    //   { route: 'inventories', name: 'inventories', moduleId: './modules/storage-inventory/index', nav: true, title: 'Laporan Stok', auth: true, settings: { group: "laporan", roles: ["admin"] } },
    //   { route: 'power-bi', name: 'power-bi', moduleId: './modules/power-bi/index', nav: true, title: 'Power BI Reports', auth: true, settings: { group: "dashboard", roles: ["admin"] } },
    //   { route: 'daily-omzet-store', name: 'daily-omzet-store', moduleId: './modules/daily-omzet-store/index', nav: true, title: 'Omset Harian (per Toko)', auth: true, settings: { group: "dashboard", roles: ["admin"] } },
    //   { route: 'daily-omzet-sales-category', name: 'daily-omzet-sales-category', moduleId: './modules/daily-omzet-sales-category/index', nav: true, title: 'Omset Harian (per Penjualan)', auth: true, settings: { group: "dashboard", roles: ["admin"] } }
    // ];

    config.map(routes);
    this.router = router;
  }

  @computedFrom('authService.authenticated')
  get isAuthenticated() {
    return this.authService.authenticated;
  }
}

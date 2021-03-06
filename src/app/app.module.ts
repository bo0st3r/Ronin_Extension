import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainTabComponent} from './layout/component/extension-tab/main-tab.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FilterCoinsPipe} from './coin-market/pipe/filter-coins.pipe';
import {CoinSearchComponent} from './coin-market/component/coin-search/coin-search.component';
import {EthereumScannerComponent} from './chain-explorer/component/ethereum-scanner/ethereum-scanner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './layout/component/footer/footer.component';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ExtensionHyperlinkComponent} from './chrome/component/extension-hyperlink/extension-hyperlink.component';
import {HeaderComponent} from './layout/component/header/header.component';
import {ChipsModule} from 'primeng/chips';
import {CoinSearchInputComponent} from './coin-market/component/coin-search-input/coin-search-input.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    MainTabComponent,
    CoinSearchComponent,
    EthereumScannerComponent,
    FooterComponent,
    ExtensionHyperlinkComponent,
    HeaderComponent,
    FilterCoinsPipe,
    CoinSearchInputComponent,
  ],
    imports: [
        TooltipModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        DialogModule,
        BrowserAnimationsModule,
        RadioButtonModule,
        ChipsModule,
        ProgressSpinnerModule,
    ],
  providers: [
    FilterCoinsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

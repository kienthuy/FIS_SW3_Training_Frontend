import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { ExtraRoutes } from './extra.routing';
import { AppIconsComponent } from './icons/icons.component';
import { AppSamplePageComponent } from './sample-page/sample-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoChartComponent } from './demo-chart/demo-chart.component';
import { ChartComponent } from './chart/chart.component';
import { MatCardModule } from '@angular/material/card';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExtraRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    NgApexchartsModule,
    MatCardModule

  ],
  declarations: [
    AppIconsComponent,
    AppSamplePageComponent,
    DemoChartComponent,
    ChartComponent,
    ContactFormComponent,
    NewsComponent,
  ],
})
export class ExtraModule {}

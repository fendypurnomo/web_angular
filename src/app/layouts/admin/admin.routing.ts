import { Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/shared/guards';

import {
  // Home
  HomeComponent,
  // Profile
  ProfileDetailComponent,
  UpdatePhotoComponent,
  UpdateInfoComponent,
  UpdatePasswordComponent,
  // Settings
  SettingsComponent,
  // Message
  MessagesComponent,
  // Notification
  NotificationsComponent,
  // Page Not Found
  PageNotFoundComponent,
  // HTML
  HtmlCssComponent,
  HtmlComponent,
  // CSS
  CssComponent,
  // Colors
  ColorsComponent,
  // Bootstrap
  BootstrapComponent,
  BsLayoutComponent,
  BsOverviewComponent,
  BsGridComponent,
  BsUtilitiesForLayoutComponent,
  BsContentComponent,
  BsRebootComponent,
  BsTypographyComponent,
  BsCodeComponent,
  BsImagesComponent,
  BsTablesComponent,
  BsFiguresComponent,
  BsComponentsComponent,
  BsAlertsComponent,
  BsBadgeComponent,
  BsBreadcrumbComponent,
  BsButtonsComponent,
  BsButtonGroupComponent,
  BsCardComponent,
  BsCarouselComponent,
  BsCollapseComponent,
  BsDropdownsComponent,
  BsFormsComponent,
  BsInputGroupComponent,
  BsJumbotronComponent,
  BsListGroupComponent,
  BsMediaObjectComponent,
  BsModalComponent,
  BsNavsComponent,
  BsNavbarComponent,
  BsPaginationComponent,
  BsPopoversComponent,
  BsProgressComponent,
  BsScrollspyComponent,
  BsSpinnersComponent,
  BsToastsComponent,
  BsTooltipsComponent,
  BsUtilitiesComponent,
  BsBordersComponent,
  BsClearfixComponent,
  BsCloseIconComponent,
  BsColorsComponent,
  BsDisplayComponent,
  BsEmbedComponent,
  BsFlexComponent,
  BsFloatComponent,
  BsImageReplacementComponent,
  BsOverflowComponent,
  BsPositionComponent,
  BsScreenReadersComponent,
  BsShadowsComponent,
  BsSizingComponent,
  BsSpacingComponent,
  BsStretchedLinkComponent,
  BsTextComponent,
  BsVerticalAlignComponent,
  BsVisibilityComponent,
  // Icons
  IconsComponent,
  FontAwesomeComponent,
  ThemifyComponent,
  // Graphics
  GraphicsComponent,
  // Javascript
  JscriptComponent,
  JavascriptComponent,
  JqueryComponent,
  JsonComponent,
  AjaxComponent,
  // Server Side
  ServerSideComponent,
  SqlComponent,
  PhpComponent,
  PythonComponent,
  JavaComponent,
  AspComponent,
  NodejsComponent,
  RaspberrypiComponent,
  // XML
  XmlsComponent,
  XmlComponent,
  XmlAjaxComponent,
  XmlDomComponent,
  XmlDtdComponent,
  XmlSchemaComponent,
  XsltComponent,
  XpathComponent,
  XqueryComponent
} from 'src/app/pages/admin';

export const AdminRoutes: Routes = [
  {
    path: 'dashboard',
    data: { breadcrumb: 'Beranda' },
    canActivate: [IsLoggedInGuard],
    children: [
      { path: '', component: HomeComponent, data: { title: 'Beranda' } },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Beranda', breadcrumb: '' }
      },
      {
        path: 'profile',
        data: { title: 'Profil', breadcrumb: '' },
        children: [
          {
            path: ':username',
            component: ProfileDetailComponent,
            data: { breadcrumb: 'Profile' }
          },
          {
            path: 'updatePhoto/:username',
            component: UpdatePhotoComponent,
            data: { breadcrumb: 'Perbaharui Foto Profil' }
          },
          {
            path: 'updatePassword/:username',
            component: UpdatePasswordComponent,
            data: { breadcrumb: 'Ubah Kata Sandi' }
          },
          {
            path: 'updateInfo/:username',
            component: UpdateInfoComponent,
            data: { breadcrumb: 'Perbaharui Info Akun' }
          }
        ]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Pengaturan', breadcrumb: 'Pengaturan' }
      },
      {
        path: 'messages',
        component: MessagesComponent,
        data: { title: 'Pesan', breadcrumb: 'Pesan' }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { title: 'Pemberitahuan', breadcrumb: 'Pemberitahuan' }
      },
      {
        path: 'htmlCss',
        data: { breadcrumb: 'Html Css' },
        children: [
          {
            path: '',
            component: HtmlCssComponent,
            data: { title: 'HTML CSS', breadcrumb: 'Html Css' }
          },
          {
            path: 'html',
            component: HtmlComponent,
            data: { title: 'HTML', breadcrumb: 'Html' }
          },
          {
            path: 'css',
            component: CssComponent,
            data: { title: 'CSS', breadcrumb: 'Css' }
          },
          {
            path: 'colors',
            component: ColorsComponent,
            data: { title: 'Colors', breadcrumb: 'Colors' }
          },
          {
            path: 'bootstrap',
            data: { breadcrumb: 'Bootstrap' },
            children: [
              {
                path: '',
                component: BootstrapComponent,
                data: { title: 'Bootstrap', breadcrumb: 'Bootstrap' }
              },
              {
                path: 'layout',
                data: { breadcrumb: 'Layout' },
                children: [
                  {
                    path: '',
                    component: BsLayoutComponent,
                    data: { title: 'Layout', breadcrumb: 'Layout' },
                  },
                  {
                    path: 'overview',
                    component: BsOverviewComponent,
                    data: { title: 'Overview', breadcrumb: 'Overview' },
                  },
                  {
                    path: 'grid',
                    component: BsGridComponent,
                    data: { title: 'Grid', breadcrumb: 'Grid' },
                  },
                  {
                    path: 'utilitiesForLayout',
                    component: BsUtilitiesForLayoutComponent,
                    data: {
                      title: 'Utilities for Layout',
                      breadcrumb: 'Utilities for Layout',
                    }
                  }
                ]
              },
              {
                path: 'content',
                data: { breadcrumb: 'Content' },
                children: [
                  {
                    path: '',
                    component: BsContentComponent,
                    data: { title: 'Content', breadcrumb: 'Content' },
                  },
                  {
                    path: 'reboot',
                    component: BsRebootComponent,
                    data: { title: 'Reboot', breadcrumb: 'Reboot' },
                  },
                  {
                    path: 'typography',
                    component: BsTypographyComponent,
                    data: { title: 'Typography', breadcrumb: 'Typography' },
                  },
                  {
                    path: 'code',
                    component: BsCodeComponent,
                    data: { title: 'Code', breadcrumb: 'Code' },
                  },
                  {
                    path: 'images',
                    component: BsImagesComponent,
                    data: { title: 'Images', breadcrumb: 'Images' },
                  },
                  {
                    path: 'tables',
                    component: BsTablesComponent,
                    data: { title: 'Tables', breadcrumb: 'Tables' },
                  },
                  {
                    path: 'figures',
                    component: BsFiguresComponent,
                    data: { title: 'Figures', breadcrumb: 'Figures' },
                  }
                ]
              },
              {
                path: 'components',
                data: { breadcrumb: 'Components' },
                children: [
                  {
                    path: '',
                    component: BsComponentsComponent,
                    data: { title: 'Components', breadcrumb: 'Components' },
                  },
                  {
                    path: 'alerts',
                    component: BsAlertsComponent,
                    data: { title: 'Alerts', breadcrumb: 'Alerts' },
                  },
                  {
                    path: 'badge',
                    component: BsBadgeComponent,
                    data: { title: 'Badge', breadcrumb: 'Badge' },
                  },
                  {
                    path: 'breadcrumb',
                    component: BsBreadcrumbComponent,
                    data: { title: 'Breadcrumb', breadcrumb: 'Breadcrumb' },
                  },
                  {
                    path: 'buttons',
                    component: BsButtonsComponent,
                    data: { title: 'Buttons', breadcrumb: 'Buttons' },
                  },
                  {
                    path: 'buttonGroup',
                    component: BsButtonGroupComponent,
                    data: { title: 'Button Group', breadcrumb: 'Button Group' },
                  },
                  {
                    path: 'card',
                    component: BsCardComponent,
                    data: { title: 'Card', breadcrumb: 'Card' },
                  },
                  {
                    path: 'carousel',
                    component: BsCarouselComponent,
                    data: { title: 'Carousel', breadcrumb: 'Carousel' },
                  },
                  {
                    path: 'collapse',
                    component: BsCollapseComponent,
                    data: { title: 'Collapse', breadcrumb: 'Collapse' },
                  },
                  {
                    path: 'dropdowns',
                    component: BsDropdownsComponent,
                    data: { title: 'Dropdowns', breadcrumb: 'Dropdowns' },
                  },
                  {
                    path: 'forms',
                    component: BsFormsComponent,
                    data: { title: 'Forms', breadcrumb: 'Forms' },
                  },
                  {
                    path: 'inputGroup',
                    component: BsInputGroupComponent,
                    data: { title: 'Input Group', breadcrumb: 'Input Group' },
                  },
                  {
                    path: 'jumbotron',
                    component: BsJumbotronComponent,
                    data: { title: 'Jumbotron', breadcrumb: 'Jumbotron' },
                  },
                  {
                    path: 'listGroup',
                    component: BsListGroupComponent,
                    data: { title: 'List Group', breadcrumb: 'List Group' },
                  },
                  {
                    path: 'mediaObject',
                    component: BsMediaObjectComponent,
                    data: { title: 'Media Object', breadcrumb: 'Media Object' },
                  },
                  {
                    path: 'modal',
                    component: BsModalComponent,
                    data: { title: 'Modal', breadcrumb: 'Modal' },
                  },
                  {
                    path: 'navs',
                    component: BsNavsComponent,
                    data: { title: 'Navs', breadcrumb: 'Navs' },
                  },
                  {
                    path: 'navbar',
                    component: BsNavbarComponent,
                    data: { title: 'Navbar', breadcrumb: 'Navbar' },
                  },
                  {
                    path: 'pagination',
                    component: BsPaginationComponent,
                    data: { title: 'Pagination', breadcrumb: 'Pagination' },
                  },
                  {
                    path: 'popovers',
                    component: BsPopoversComponent,
                    data: { title: 'Popovers', breadcrumb: 'Popovers' },
                  },
                  {
                    path: 'progress',
                    component: BsProgressComponent,
                    data: { title: 'Progress', breadcrumb: 'Progress' },
                  },
                  {
                    path: 'scrollspy',
                    component: BsScrollspyComponent,
                    data: { title: 'Scrollspy', breadcrumb: 'Scrollspy' },
                  },
                  {
                    path: 'spinners',
                    component: BsSpinnersComponent,
                    data: { title: 'Spinners', breadcrumb: 'Spinners' },
                  },
                  {
                    path: 'toasts',
                    component: BsToastsComponent,
                    data: { title: 'Toasts', breadcrumb: 'Toasts' },
                  },
                  {
                    path: 'tooltips',
                    component: BsTooltipsComponent,
                    data: { title: 'Tooltips', breadcrumb: 'Tooltips' },
                  }
                ]
              },
              {
                path: 'utilities',
                data: { breadcrumb: 'Utilities' },
                children: [
                  {
                    path: '',
                    component: BsUtilitiesComponent,
                    data: { title: 'Utilities', breadcrumb: 'Utilities' },
                  },
                  {
                    path: 'borders',
                    component: BsBordersComponent,
                    data: { title: 'Borders', breadcrumb: 'Borders' },
                  },
                  {
                    path: 'clearfix',
                    component: BsClearfixComponent,
                    data: { title: 'Clearfix', breadcrumb: 'Clearfix' },
                  },
                  {
                    path: 'closeIcon',
                    component: BsCloseIconComponent,
                    data: { title: 'Close Icon', breadcrumb: 'Close Icon' },
                  },
                  {
                    path: 'colors',
                    component: BsColorsComponent,
                    data: { title: 'Colors', breadcrumb: 'Colors' },
                  },
                  {
                    path: 'display',
                    component: BsDisplayComponent,
                    data: { title: 'Display', breadcrumb: 'Display' },
                  },
                  {
                    path: 'embed',
                    component: BsEmbedComponent,
                    data: { title: 'Embed', breadcrumb: 'Embed' },
                  },
                  {
                    path: 'flex',
                    component: BsFlexComponent,
                    data: { title: 'Flex', breadcrumb: 'Flex' },
                  },
                  {
                    path: 'float',
                    component: BsFloatComponent,
                    data: { title: 'Float', breadcrumb: 'Float' },
                  },
                  {
                    path: 'imageReplacement',
                    component: BsImageReplacementComponent,
                    data: {
                      title: 'Image Replacement',
                      breadcrumb: 'Image Replacement',
                    },
                  },
                  {
                    path: 'overflow',
                    component: BsOverflowComponent,
                    data: { title: 'Overflow', breadcrumb: 'Overflow' },
                  },
                  {
                    path: 'position',
                    component: BsPositionComponent,
                    data: { title: 'Position', breadcrumb: 'Position' },
                  },
                  {
                    path: 'screenReaders',
                    component: BsScreenReadersComponent,
                    data: {
                      title: 'Screen Readers',
                      breadcrumb: 'Screen Readers',
                    },
                  },
                  {
                    path: 'shadows',
                    component: BsShadowsComponent,
                    data: { title: 'Shadows', breadcrumb: 'Shadows' },
                  },
                  {
                    path: 'sizing',
                    component: BsSizingComponent,
                    data: { title: 'Sizing', breadcrumb: 'Sizing' },
                  },
                  {
                    path: 'spacing',
                    component: BsSpacingComponent,
                    data: { title: 'Spacing', breadcrumb: 'Spacing' },
                  },
                  {
                    path: 'stretchedLink',
                    component: BsStretchedLinkComponent,
                    data: {
                      title: 'Stretched Link',
                      breadcrumb: 'Stretched Link',
                    },
                  },
                  {
                    path: 'text',
                    component: BsTextComponent,
                    data: { title: 'Text', breadcrumb: 'Text' },
                  },
                  {
                    path: 'verticalAlign',
                    component: BsVerticalAlignComponent,
                    data: {
                      title: 'Vertical Align',
                      breadcrumb: 'Vertical Align',
                    },
                  },
                  {
                    path: 'visibility',
                    component: BsVisibilityComponent,
                    data: { title: 'Visibility', breadcrumb: 'Visibility' },
                  }
                ]
              }
            ]
          },
          {
            path: 'icons',
            data: { breadcrumb: 'Icons' },
            children: [
              {
                path: '',
                component: IconsComponent,
                data: { title: 'Icons', breadcrumb: 'Icons' }
              },
              {
                path: 'fontAwesome',
                component: FontAwesomeComponent,
                data: { title: 'Font Awesome', breadcrumb: 'Font Awesome' }
              },
              {
                path: 'themify',
                component: ThemifyComponent,
                data: { title: 'Themify', breadcrumb: 'Themify' }
              }
            ]
          },
          {
            path: 'graphics',
            component: GraphicsComponent,
            data: { title: 'Graphics', breadcrumb: 'Graphics' }
          }
        ]
      },
      {
        path: 'javascript',
        data: { breadcrumb: 'Javascript' },
        children: [
          {
            path: '',
            component: JscriptComponent,
            data: { title: 'Javascript', breadcrumb: 'Javascript' }
          },
          {
            path: 'javascript',
            component: JavascriptComponent,
            data: { title: 'Javascript', breadcrumb: 'Javascript' }
          },
          {
            path: 'jquery',
            component: JqueryComponent,
            data: { title: 'Jquery', breadcrumb: 'Jquery' }
          },
          {
            path: 'json',
            component: JsonComponent,
            data: { title: 'Json', breadcrumb: 'Json' }
          },
          {
            path: 'ajax',
            component: AjaxComponent,
            data: { title: 'Ajax', breadcrumb: 'Ajax' }
          }
        ]
      },
      {
        path: 'serverSide',
        data: { breadcrumb: 'Server Side' },
        children: [
          {
            path: '',
            component: ServerSideComponent,
            data: { title: 'Server Side', breadcrumb: 'Server Side' }
          },
          {
            path: 'sql',
            component: SqlComponent,
            data: { title: 'SQL', breadcrumb: 'Sql' }
          },
          {
            path: 'php',
            component: PhpComponent,
            data: { title: 'PHP', breadcrumb: 'Php' }
          },
          {
            path: 'python',
            component: PythonComponent,
            data: { title: 'python', breadcrumb: 'Python' }
          },
          {
            path: 'java',
            component: JavaComponent,
            data: { title: 'Java', breadcrumb: 'Java' }
          },
          {
            path: 'asp',
            component: AspComponent,
            data: { title: 'ASP', breadcrumb: 'Asp' }
          },
          {
            path: 'nodejs',
            component: NodejsComponent,
            data: { title: 'Node.js', breadcrumb: 'Node.js' }
          },
          {
            path: 'raspberrypi',
            component: RaspberrypiComponent,
            data: { title: 'Raspberry pi', breadcrumb: 'Raspberry Pi' }
          }
        ]
      },
      {
        path: 'xml',
        data: { breadcrumb: 'Xml' },
        children: [
          {
            path: '',
            component: XmlsComponent,
            data: { title: 'XML', breadcrumb: 'Xml' }
          },
          {
            path: 'xml',
            component: XmlComponent,
            data: { title: 'XML', breadcrumb: 'Xml' }
          },
          {
            path: 'xmlAjax',
            component: XmlAjaxComponent,
            data: { title: 'XML Ajax', breadcrumb: 'Xml Ajax' }
          },
          {
            path: 'xmlDom',
            component: XmlDomComponent,
            data: { title: 'XML DOM', breadcrumb: 'Xml Dom' }
          },
          {
            path: 'xmlDtd',
            component: XmlDtdComponent,
            data: { title: 'XML DTD', breadcrumb: 'Xml Dtd' }
          },
          {
            path: 'xmlSchema',
            component: XmlSchemaComponent,
            data: { title: 'XML Schema', breadcrumb: 'Xml Schema' }
          },
          {
            path: 'xSlt',
            component: XsltComponent,
            data: { title: 'xSLT', breadcrumb: 'Xslt' }
          },
          {
            path: 'xPath',
            component: XpathComponent,
            data: { title: 'xPath', breadcrumb: 'Xpath' }
          },
          {
            path: 'xQuery',
            component: XqueryComponent,
            data: { title: 'xQuery', breadcrumb: 'Xquery' }
          }
        ]
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Laman tak ditemukan!' }
      }
    ]
  }
];
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  data: any = {
    grupo1: [
      {
        titulo: 'President',
        subtitulo: 'Yannis Tsapos',
        telefono: '',
        telefonoRaw: '',
        correo: 'yannis.tsapos@dionysosimports.com',
      },
      {
        titulo: 'Office Manager',
        subtitulo: 'David Costa',
        telefono: '',
        telefonoRaw: '',
        correo: 'david.costa@dionysosimports.com',
      },
    ],
    grupo2: [
      {
        titulo: 'Wine Manager',
        subtitulo: 'Catherine Kaylor',
        telefono: '',
        telefonoRaw: '',
        correo: 'catherine.kaylor@dionysosimports.com',
      },
    ],
    grupo3: [
      {
        titulo: 'Maryland',
        subtitulo: 'Alexandros Georgiadis',
        telefono: '(301) 518-1935',
        telefonoRaw: '+13015181935',
        correo: 'alexgeorgiadis89@gmail.com',
      },
      {
        titulo: 'Northern Virginia',
        subtitulo: 'Amy Evans',
        telefono: '(202) 321-6387',
        telefonoRaw: '+12023216387',
        correo: 'amy.dionysos@gmail.com',
      },
      {
        titulo: 'Northern Virginia, Washington DC, Maryland',
        subtitulo: 'Catherine Kaylor',
        telefono: '(571) 437-4490',
        telefonoRaw: '+15714374490',
        correo: 'catherine.kaylor@dionysosimports.com',
      },
      {
        titulo: 'Richmond, Fredericksburg, Charlottesville',
        subtitulo: 'Clinton Emerson',
        telefono: '(804) 304-6231',
        telefonoRaw: '+18043046231',
        correo: 'clinton.emerson@dionysosimports.com',
      },
      {
        titulo: 'Northern Virginia, Washington DC',
        subtitulo: 'Dan Metzger',
        telefono: '(540) 613-0671',
        telefonoRaw: '+15406130671',
        correo: 'dan.metzger@dionysosimports.com',
      },
      {
        titulo: 'Montgomery County, Maryland',
        subtitulo: 'Demetria Loukas',
        telefono: '(240) 731-6372',
        telefonoRaw: '+12407316372',
        correo: 'demetria.loukas@dionysosimports.com',
      },
      {
        titulo: 'Northern Virginia',
        subtitulo: 'Fernanzo Leonzo',
        telefono: '(703) 906-7855',
        telefonoRaw: '+17039067855',
        correo: 'fernando.leonzo@dionysosimports.com',
      },
      {
        titulo: 'Richmond, Charlottesville, VA Beach, Norfolk, Williamsburg',
        subtitulo: 'Genevelyn Steele',
        telefono: '(804) 426-8089',
        telefonoRaw: '+18044268089',
        correo: 'genevelyn.steele@dionysosimports.com',
      },

      {
        titulo: 'Northern Virginia, Washington DC',
        subtitulo: 'Matt Perrella',
        telefono: '(954) 529-0908',
        telefonoRaw: '+19545290908',
        correo: 'matt.perrella@dionysosimports.com',
      },
      {
        titulo: 'Montgomery County',
        subtitulo: 'Nazila Safari',
        telefono: '(202) 812-5866',
        telefonoRaw: '+12028125866',
        correo: 'nazila.safari@dionysosimports.com',
      },
      {
        titulo: 'VA Beach, Newport News, Norfolk',
        subtitulo: 'Seth White',
        telefono: '(757) 749-5377',
        telefonoRaw: '+17577495377',
        correo: 'seth.white@dionysosimports.com',
      },
      {
        titulo: 'Washington DC',
        subtitulo: 'Thomas Valis',
        telefono: '(240) 305-6337',
        telefonoRaw: '+12403056337',
        correo: 'thomas.valis@dionysosimports.com',
      },
    ],
    grupo4: [
      {
        titulo: 'Northern Virginia, Washington DC',
        subtitulo: 'Zdravko Solenkov',
        telefono: '(571) 426-8277',
        telefonoRaw: '+15714268277',
        correo: 'zdravko.solenkov@dionysosimports.com',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}

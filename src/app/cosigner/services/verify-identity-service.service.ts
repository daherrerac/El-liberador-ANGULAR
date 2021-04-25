import { Injectable } from '@angular/core';

const mock = [
  {
    id: "1",
    texto:
      "HACE CUANTO TIEMPO TIENE SU CREDITO HIPOTECARIO CON BANCO CAJA SOCIAL - BCSC S A?",
    respuesta: [
      { id: "1", texto: "ENTRE 0 Y 3 AÑOS" },
      { id: "2", texto: "ENTRE 4 Y 6 AÑOS" },
      { id: "3", texto: "ENTRE 7 Y 10 AÑOS" },
      { id: "4", texto: "ENTRE 11 Y 14 AÑOS" },
      { id: "5", texto: "15 AÑOS O MAS" },
      { id: "6", texto: "NO TENGO CREDITO DE VIVIENDA CON LA ENTIDAD" },
    ],
  },
  {
    id: "2",
    texto:
      "HACE CUANTO TIEMPO TIENE USTED UN/UNA CREDITO DE ELECTRODOMESTICOS  CON BARRAGAN AGUAS CARLOS EMIRO",
    respuesta: [
      { id: "1", texto: "ENTRE 0 Y 4 AÑOS" },
      { id: "2", texto: "ENTRE 5 Y 8 AÑOS" },
      { id: "3", texto: "ENTRE 9 Y 13 AÑOS" },
      { id: "4", texto: "ENTRE 14 Y 16 AÑOS" },
      { id: "5", texto: "17 AÑOS O MAS" },
      { id: "6", texto: "NO TENGO CREDITO DE ELECTRODOMESTICOS CON LA ENTIDAD" },
    ],
  },
  {
    id: "3",
    texto:
      "HACE CUANTO TIEMPO TIENE USTED UN/UNA CREDITO DE ELECTRODOMESTICOS  CON BARRAGAN AGUAS CARLOS EMIRO",
    respuesta: [
      { id: "1", texto: "ENTRE 0 Y 4 AÑOS" },
      { id: "2", texto: "ENTRE 5 Y 8 AÑOS" },
      { id: "3", texto: "ENTRE 9 Y 13 AÑOS" },
      { id: "4", texto: "ENTRE 14 Y 16 AÑOS" },
      { id: "5", texto: "17 AÑOS O MAS" },
      { id: "6", texto: "NO TENGO CREDITO DE ELECTRODOMESTICOS CON LA ENTIDAD" },
    ],
  },
  {
    id: "4",
    texto:
      "HACE CUANTO TIEMPO TIENE USTED UN/UNA CREDITO DE ELECTRODOMESTICOS  CON BARRAGAN AGUAS CARLOS EMIRO",
    respuesta: [
      { id: "1", texto: "ENTRE 0 Y 4 AÑOS" },
      { id: "2", texto: "ENTRE 5 Y 8 AÑOS" },
      { id: "3", texto: "ENTRE 9 Y 13 AÑOS" },
      { id: "4", texto: "ENTRE 14 Y 16 AÑOS" },
      { id: "5", texto: "17 AÑOS O MAS" },
      { id: "6", texto: "NO TENGO CREDITO DE ELECTRODOMESTICOS CON LA ENTIDAD" },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class VerifyIdentityServiceService {
  getMockQuestions() {
    return mock;
  }
}

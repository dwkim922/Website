const HelloWorld: {[isoLangCode: string]: string} = {
  el: 'Γεια σου κόσμε',
  en: 'Hello World',
  fj: 'Bula Vuravura',
  fr: 'Bonjour monde',
  he: 'שלום עולם',
  hi: 'नमस्ते दुनिया',
  id: 'Halo Dunia',
  ko: '안녕 세계야',
  mk: 'Здраво Свету',
  te: 'హలో ప్రపంచం',
  uk: 'Привіт, світе',
  ur: 'ہیلو ورلڈ',
  vi: 'Xin chào thế giới',
};

export const defaultHelloWorld = HelloWorld.en;

export const HelloWorldKeys = Object.keys(HelloWorld);

export default HelloWorld;

import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#722F37',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './paleta.png',
    fullDecal: './paleta.png'
});

export default state;
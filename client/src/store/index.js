import { proxy } from "valtio";

const state=proxy({
    intro:true,
    color:'#EFBD48',
    isLogoTexture: true,
    isFullTexture:false,
    logoDecal: './logonameblack.png',
    fullDecal:'./18182178.jpg',
});
export default state;
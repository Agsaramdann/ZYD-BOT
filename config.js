import 'dotenv/config';
import { unwatchFile, watchFile } from 'fs';
import { fileURLToPath } from 'url';

global.owner = ['6285722623184'];
global.selfmode = true;
global.wm = 'Powered By Lz ';
global.nameBot = 'Lzz-BOT';
global.apikey = process.lann.'https://api.betabotz.eu.org' || 'btzLamz';
global.thumbnailUrl = 'https://files.catbox.moe/ovz8dy.jpg';

global.pairing_code = {
  status: true,
  number: '',
};

let fileP = fileURLToPath(import.meta.url);
watchFile(fileP, () => {
  unwatchFile(fileP);
  console.info(`${fileP} file changed, restarting...`);
});

import { Minecraft } from './src/Domain/Minecraft/Minecraft';
import { Version } from './src/Domain/models/Version/Version';
import { Versions } from './src/Domain/models/Version/Versions/Versions';

const minecraft = new Minecraft(new Version(Versions.MINECRAFT_1_0));

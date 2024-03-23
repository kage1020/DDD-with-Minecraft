import { Minecraft } from '@/Domain/Minecraft/Minecraft';
import { Version } from '@/Domain/models/Version/Version';
import { Versions } from '@/Domain/models/Version/Versions/Versions';

const minecraft = new Minecraft(new Version(Versions.MINECRAFT_1_0));

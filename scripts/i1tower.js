const i1Laser = extend(BasicBulletType, {});
/* zummm */
i1Laser.damage = 10;
i1Laser.bulletWidth = 6;
i1Laser.bulletHeight = 80;
i1Laser.bulletShrink = 0;
i1Laser.lifetime = 1;
i1Laser.despawnEffect = Fx.none;
/* ahhhhh */
const i1Tower = extend(laserTurret, i1tower{});
i1Tower.shootType = i1-laser;
i1Tower.update = true;

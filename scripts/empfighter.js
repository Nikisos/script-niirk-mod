//Creating a nee effect 'emp'
const emp = new StatusEffect("emp");
emp.speedMultiplier = 0;
emp.damage = 0;
emp.damageMultiplier = 0;
emp.effect = none;
//Creating a new bullet 'empMissile'
const empMissile = extend(missileBulletType);
empMissile.damage = 1;
empMissile.bulletWidth = 9;
bulletHeight = 13;
empMissile.lifetime = 180;
empMissile.speed = 3;
empMissile.frontColor = a488eb;
empMissile.backColor = 8b73c7;
empMissile.trailColor = cb00ff;
empMissile.homingPower = 1;
empMissile.homingRange = 150;
empMissile.hitEffect = blastExplosion;
empMissile.despawnEffect = blastExplosion;
empMissile.status = emp
empMissile.statusDuration = 300
//The unit
const empfighter = extend(hoverUnit)
empfighter.drag = 0.5
empfighter.speed = 1
empfighter.maxSpeed = 2
empfighter.mass = 3
empfighter.hitsize = 32
empfighter.health = 320
empfighter.flying =  true
empfighter.rotateWeapon = false
empfighter.engineOffset = 8
empgighter.engineSize = 4
empfighter.rotateSpeed = 3
empfighter.baseRotateSpeed = 1
empfighter.shootCone = 60
empfighter.weapon = empLauncher

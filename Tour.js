"use strict";

/* Testing Tour Mode */

var home = document.getElementById('home');
var playButton = document.getElementById('playbutton');
var campos;
var camrot;
var target;

var tourStop;
var nextStop;

function advanceTour(tourStop) {

    //console.log("tourStop in start of function is: " + tourStop) 

    switch (tourStop) {

        //Begin Overview Area Bookmarks
        case 0:  //Overview
            target = new THREE.Vector3(0, 0, 5.986267174878819);
            var xOffset = -10;
            var yOffset = -150;
            var zOffset = 160;
            break;
        case 1: //West Cable Route
            target = new THREE.Vector3(-119.36512676965728, -94.47120803935553, 12.462983455783387);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 200;
            break;
        case 2:  //East Cable Route
            target = new THREE.Vector3(80.74848869256981, -44.78766009578535, 2.2718322896594145);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 120;
            break;
        case 17: //WTG Area
            target = new THREE.Vector3(190.4581491761174, -10.397467392993558, 1.3366260630946343);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 25: //Z Approach
            target = new THREE.Vector3(140.74807952852996, -30.79978248171283, 1.2295707205197601);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 60;
            break;
        case 26: //Candidate Reference Area
            target = new THREE.Vector3(250.22793960789005, -1.4467432006419756, 2.0099542140960693);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 60;
            break;
        case 27: //New York Export Cable
            target = new THREE.Vector3(-216.07156079102396, -84.94652212195966, 2.9504526233942108);
            var xOffset = -1;
            var yOffset = -20;
            var zOffset = 120;
            break;


            //Begin Individual Line Bookmarks
        case 3:
            target = new THREE.Vector3(-244.86224673928575, -101.66826275386518, 2.5970500732081234);
            var xOffset = -40;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 4:
            target = new THREE.Vector3(-190.2513847244834, -81.26340802097059, 2.6282957816736996);
            var xOffset = -40;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 5:
            target = new THREE.Vector3(-150.6877379675909, -65.22118258086346, 2.610341908993007);
            var xOffset = -40;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 6:
            target = new THREE.Vector3(-213.11156193079796, -108.73827248588051, 2.2582060123103034);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 7:
            target = new THREE.Vector3(-172.335968857836, -96.0554849981536, 2.3417896056788123);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 8:
            target = new THREE.Vector3(-131.24097833220125, -83.74382980990842, 2.2093340182917416);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 9:
            target = new THREE.Vector3(-93.35408125433362, -71.84367077637516, 2.0946115279810726);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 10:
            target = new THREE.Vector3(-71.33781786278188, -72.66436577968842, 1.8841024661677181);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 11:
            target = new THREE.Vector3(-51.233577209657604, -65.30657764536511, 1.4494682574885047);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 12:
            target = new THREE.Vector3(-15.01305790336507, -47.7740240132733, 1.5272097612040199);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 13:
            target = new THREE.Vector3(25.788684001324945, -35.638896646848636, 1.630980374874369);
            var xOffset = -1;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 14:
            target = new THREE.Vector3(31.411108093127957, -40.143991984052576, 1.549526097835809);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 15:
            target = new THREE.Vector3(67.54619137805032, -40.25009320127286, 1.637322905124904);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 16:
            target = new THREE.Vector3(107.5811421098941, -40.802542162971186, 1.5260683322565711);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
            //case 17 is wind farm survey area (above)
        case 18:
            target = new THREE.Vector3(126.58394131475508, -35.384737988915646, 1.6950376058237708);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 19:
            target = new THREE.Vector3(145.94369903488493, -28.44612501098429, 1.8898955608027137);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 20:
            target = new THREE.Vector3(169.6413482499332, -21.4311376642707, 2.0545483852045834);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 21:
            target = new THREE.Vector3(180.4204053091351, -2.4789402735604256, 1.998813273967997);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 22:
            target = new THREE.Vector3(179.91912312511457, -8.753373525144823, 2.0524359965937293);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 23:
            target = new THREE.Vector3(179.54458498992003, -14.556819338690396, 2.0476744199411883);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
        case 24:
            target = new THREE.Vector3(178.04186754270287, -21.04362160809429, 2.0545483852045834);
            var xOffset = -10;
            var yOffset = -40;
            var zOffset = 50;
            break;
    }

    nextStop = tourStop;

    var origpos = new THREE.Vector3().copy(app.camera.position); // original position
    var origrot = new THREE.Euler().copy(app.camera.rotation); // original rotation

    app.camera.position.set(target.x + xOffset, target.y + yOffset, target.z + zOffset);
    app.camera.lookAt(target);

    var dstrot = new THREE.Euler().copy(app.camera.rotation)

    app.camera.position.set(origpos.x, origpos.y, origpos.z);
    app.camera.rotation.set(origrot.x, origrot.y, origrot.z);

    var tween = new TWEEN.Tween(app.camera.position).to({
            x: target.x + xOffset,
            y: target.y + yOffset,
            z: target.z + zOffset
        }, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut).start();

    (function () {
        var qa = new THREE.Quaternion().copy(app.camera.quaternion); // src quaternion
        var qb = new THREE.Quaternion().setFromEuler(dstrot); // dst quaternion
        var qm = new THREE.Quaternion();
        app.camera.Quaternion = qm;

        var o = {
            t: 0
        };
        new TWEEN.Tween(o).to({
            t: 1
        }, 2000).onUpdate(function () {
            THREE.Quaternion.slerp(qa, qb, qm, o.t);
            app.camera.quaternion.set(qm.x, qm.y, qm.z, qm.w);
        }).easing(TWEEN.Easing.Quadratic.InOut).start();
    }).call(this);

    app.controls.target.copy(target)

    //console.log("tourStop at end of function is: " + tourStop)

}

function nextTour() {
    //console.log("tourStop before is: " + tourStop)
    if (nextStop < 9) {
        nextStop++;
    } else {
        nextStop = 0;
    }
    //console.log("tourStop after is: " + tourStop)
    advanceTour(nextStop);

}

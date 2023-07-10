import Harvester from './role/Harvester';

export default {
    loop() {
        for (let name in Game.creeps) {
            let creep = Game.creeps[name];
            Harvester.run(creep);
        }
    }
}

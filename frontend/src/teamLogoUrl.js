const knownLogos = new Map([
    ['a-team', require('@/assets/logos/a-team.png')],
    ['ais', require('@/assets/logos/ais.png')],
    ['blue', require('@/assets/logos/blue.png')],
    ['cmμs', require('@/assets/logos/cmμs.png')],
    ['er-force', require('@/assets/logos/er-force.png')],
    ['greentea', require('@/assets/logos/greentea.png')],
    ['immortals', require('@/assets/logos/immortals.png')],
    ['kiks', require('@/assets/logos/kiks.png')],
    ['luhbots', require('@/assets/logos/luhbots.png')],
    ['mct-susano-logics', require('@/assets/logos/mct-susano-logics.png')],
    ['mrl', require('@/assets/logos/mrl.png')],
    ['namec', require('@/assets/logos/namec.png')],
    ['neuislanders', require('@/assets/logos/neuislanders.png')],
    ['op-amp', require('@/assets/logos/op-amp.png')],
    ['orcabot', require('@/assets/logos/orca-bot.png')],
    ['ri-one', require('@/assets/logos/rione.png')],
    ['robôcin', require('@/assets/logos/robocin.png')],
    ['robodragons', require('@/assets/logos/robodragons.png')],
    ['robofei', require('@/assets/logos/robofei.png')],
    ['roboime', require('@/assets/logos/roboime.png')],
    ['robojackets', require('@/assets/logos/robojackets.png')],
    ['roboteam-twente', require('@/assets/logos/roboteam-twente.png')],
    ['src', require('@/assets/logos/src.png')],
    ['tigers-mannheim', require('@/assets/logos/tigers-mannheim.png')],
    ['ubc-thunderbots', require('@/assets/logos/ubc-thunderbots.png')],
    ['ultron', require('@/assets/logos/ultron.png')],
    ['umass-minutebots', require('@/assets/logos/umass-minutebots.png')],
    ['uroborus', require('@/assets/logos/uroborus.png')],
    ['yellow', require('@/assets/logos/yellow.png')],
    ['zjunlict', require('@/assets/logos/zjunlict.png')],
    ['浙江大学', require('@/assets/logos/浙江大学.png')],
    ['浙江广厦建设职业技术大学', require('@/assets/logos/浙江广厦建设职业技术大学.png')],
    ['宁波大学', require('@/assets/logos/宁波大学.png')],
    ['宁波工程学院', require('@/assets/logos/宁波工程学院.png')],
    ['浙江工商大学', require('@/assets/logos/浙江工商大学.png')],
    ['浙江水利水电学院', require('@/assets/logos/浙江水利水电学院.png')],
    ['浙大城市学院', require('@/assets/logos/浙大城市学院.png')],
    ['温州职业技术学院', require('@/assets/logos/温州职业技术学院.png')],
    ['浙大宁波理工学院', require('@/assets/logos/浙大宁波理工学院.png')],
    ['湖州师范学院', require('@/assets/logos/湖州师范学院.png')],
]);

import defaultLogo from '@/assets/logos/no-logo.png';

const teamLogoUrl = function (teamName) {
    const logoBaseName = teamName.toLowerCase().split(' - ')[0];
    const logoPath = knownLogos.get(logoBaseName);
    if (logoPath !== undefined) {
        return logoPath;
    }
    return defaultLogo;
};

export default teamLogoUrl;

function upgradeCrew() {
    const pirates = [
        { name: 'zoro', bounty: 100000, strength: 1050 },
        { name: 'sanji', bounty: 95000, strength: 960 },
        { name: 'usop', bounty: 52000, strength: 460 }
    ];
    const awakenedPirates = pirates.map((value, index) =>
    ({
        name: value.name.toUpperCase(),
        bounty: value.bounty * 2,
        strength: value.strength * 1.5

    }));
    console.log(awakenedPirates); 

    // Lọc ra thành viên có sức mạnh > 500
    const monsterTrioCandidates = pirates.filter(value => value.strength > 500);
    console.log(monsterTrioCandidates);
};
upgradeCrew();


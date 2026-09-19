function printBountyLeaderboard() {
  const crewList = [
    { name: "Luffy", bounty: 5000 },
    { name: "Zoro", bounty: 4500 },
    { name: "Sanji", bounty: 4000 },
    { name: "Nami", bounty: 2100 },
    { name: "Robin", bounty: 3000 },
  ];
  crewList.sort((a, b) => b.bounty - a.bounty);
  let symbol = "";
  for (let i = 0; i < crewList.length; i++) {
    if (i === 0) {
      crewList[i].symbol = "🥇";
    }
    if (i === 1) {
      crewList[i].symbol = "🥈";
    }
    if (i === 2) {
      crewList[i].symbol = "🥉";
    }
    if (i > 2) {
      crewList[i].symbol = "";
    }
    console.log(
      crewList[i].symbol +
        " " +
        crewList[i].name +
        " - " +
        crewList[i].bounty +
        " bounty"
    );
  }
}

//const symbol = crewList.unshift('🥉','🥇','🥈')

printBountyLeaderboard();

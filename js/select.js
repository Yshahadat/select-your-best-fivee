const selectArray = [];
function display(playerName) {
    const tablePlayer = document.getElementById('player-list');
    tablePlayer.innerHTML = '';
    for (let i = 0; i < selectArray; i++) {
        console.log(selectArray[i].playerName);
        const name = selectArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `

        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tablePlayer.appendChild(tr);
    }

}
function addToSelect(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    console.log(element.parentNode.parentNode.children[1].children[0].innerText);

    const selectobj = {
        playerName: playerName,
    }
    document.getElementById('selected-v').innerText = selectArray.length;
    display(selectArray);
}
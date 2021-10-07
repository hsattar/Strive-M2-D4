let playerNames = [ ]

let playersNameInput = document.getElementById('players-name-input')
let addPlayerName = document.getElementById('add-player-name')
let noOfTeamsInput = document.getElementById('no-of-teams-input')
let createNoOfTeams = document.getElementById('create-no-of-teams')

const triggerClickWithEnter = (input, btn) => {
    input.onkeyup = e => {
        if (e.keyCode === 13) {
            e.preventDefault()
            btn.click()
        }
    }
}

triggerClickWithEnter(playersNameInput, addPlayerName)


const displayPlayerInWaitingArea = () => {
    let waitingListArea = document.getElementById('waiting-list')
    waitingListArea.innerHTML = ''
    for (player of playerNames) {
        let item = document.createElement('li')
        item.innerHTML += player
        waitingListArea.appendChild(item)
    }
}


const addPlayerToArray = () => {
    playerNames.push(playersNameInput.value)
    playersNameInput.value = ''
    displayPlayerInWaitingArea()
}



addPlayerName.addEventListener('click', addPlayerToArray)

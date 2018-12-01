const fictiziaPupils = ['Maria', 
                        'Jaime',
                        'Tere',
                        'Karina',
                        'Mireia',
                        'Jaime',
                        'Jose',
                        'Agnes',
                        'Jaime',
                        'Jose',
                        'Jaime']


function findPositions(name, list){

    const position = list.indexOf(name)
    console.log(position)
    list[position] = name + 'Changed'
}

findPositions('Jaime', fictiziaPupils)
findPositions('Jaime', fictiziaPupils)
findPositions('Jaime', fictiziaPupils)
findPositions('Jaime', fictiziaPupils)
findPositions('Jaime', fictiziaPupils)





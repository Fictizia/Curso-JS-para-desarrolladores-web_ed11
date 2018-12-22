class User {
    constructor(nickname){
        this.nickname = nickname
        this.following = []
    }
    post(texto){
      console.log(`Me estoy quejando de ${texto}`)
    }

    follow(user){
        if (this.nickname == user.nickname){
            console.log('No puedes seguirte a ti mismo tramposillo')
            return
        }
        this.following.push(user)
        console.log(`sigo a ${this.following.length} personas y es ${this.following[0].nickname}`)
    }
}

class Company{
    constructor(name, user){
        
        this.name = name
        this.user = user
    }

    createCampaign(campaign){
        console.log(`esto es una campaña de marketing de ${this.name} sobre ${campaign}
        y he tenido que heredar un nickname ${this.nickname} por narices`)
    }

    queja(texto){
        this.user.post(texto)
    }

    follow(aUser){
        this.user.follow(aUser)
    }
}

const agnes = new User('agnesMolona')
const maria = new User('mariaMolaTambien')
maria.post('php')
maria.follow(agnes)



const myCoolCompany = new Company('Duff', agnes)
myCoolCompany.createCampaign('birra')
myCoolCompany.queja('Sidra')
myCoolCompany.follow(maria)




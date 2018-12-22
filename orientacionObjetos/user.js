class User {
    constructor(nickname){
        this.nickname = nickname
        this.following = []
    }
    post(texto){
      console.log(`Me estoy quejando de ${texto}`)
    }

    follow(user){
        this.following.push(user)
        console.log(`sigo a ${this.following.length} personas y es ${this.following[0].nickname}`)
    }
}

class Company extends User{
    constructor(name, nickname){
        super(nickname)
        this.name = name
    }

    createCampaign(campaign){
        console.log(`esto es una campaña de marketing de ${this.name} sobre ${campaign}
        y he tenido que heredar un nickname ${this.nickname} por narices`)
    }

    post(texto){
        console.log(`Estoy alabando las propiedades de ${texto}`)
    }
}

const myCoolCompany = new Company('Duff', 'birraDuff')
myCoolCompany.createCampaign('birra')
myCoolCompany.post('Sidra')



const agnes = new User('agnesMolona')
const maria = new User('mariaMolaTambien')
maria.post('php')
maria.follow(agnes)
module.export ={ 
    app :[ {
        script: 'npm start'
    }],
     deploy :{
        production :
        {
            key: 'luxaweb.pem',
            user:'ubuntu',
            host:'16.171.197.128',
            ref: 'oring/main',
            repo:'git@github.com:noumanas/LuxaWeb.git',
            path:'/home/ubuntu',
            'pre-deploy-local':'', 
            'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js',
            'pre-setup' :'', 
            'ssh_options':'ForwardAgent=yes'
        }
    }
}
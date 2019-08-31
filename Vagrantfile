Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/xenial64"
    
    config.vm.define "webserver" do |webserver|
        webserver.vm.hostname = "webserver"
        
        webserver.vm.network "forwarded_port", guest: 80, host: 5000, host_ip: "127.0.0.1"
        webserver.vm.network "private_network", ip: "192.168.2.8"

        webserver.vm.synced_folder "source/webserver", "/src", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]

        webserver.vm.provision "shell", path: "node.sh", privileged:false 
        webserver.vm.provision "shell", path: "webserver.sh", privileged: false
    end

    config.vm.define "charactersender" do |sender| 
        sender.vm.hostname = "charactersender"
        sender.vm.provision "shell", path: "node.sh", privileged:false 
        sender.vm.provision "shell", path: "charactersender.sh", privileged: false
        sender.vm.synced_folder "source/charactersender", "/src", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]
    end

    # config.vm.define "postAgent" do |agent| 
    #     agent.vm.hostname = "postAgent"
    #     agent.vm.provision "shell", path: "node.sh", privileged:false 
    #     agent.vm.provision "shell", path: "postAgent.sh", privileged: false
    # end
end
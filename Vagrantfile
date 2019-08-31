Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/xenial64"

    config.vm.define "databaseserver" do |database| 
        database.vm.hostname = "databaseserver"
        
        database.vm.network "forwarded_port", guest: 3306, host: 3306
        database.vm.network "private_network", ip: "192.168.2.6"
        
        database.vm.synced_folder "source/databaseserver", "/src", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]
        
        database.vm.provision "shell", path: "databaseserver.sh", privileged: false
    end

    config.vm.define "characterhandler" do |sender| 
        sender.vm.hostname = "characterhandler"

        sender.vm.network "forwarded_port", guest: 80, host: 3003, host_ip: "127.0.0.1"
        sender.vm.network "private_network", ip: "192.168.2.7"
        
        sender.vm.provision "shell", path: "node.sh", privileged:false 
        sender.vm.provision "shell", path: "characterhandler.sh", privileged: false
        
        sender.vm.synced_folder "source/characterhandler", "/src", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]
    end
    
#     config.vm.define "webserver" do |webserver|
#         webserver.vm.hostname = "webserver"
        
#         webserver.vm.network "forwarded_port", guest: 80, host: 5000, host_ip: "127.0.0.1"
#         webserver.vm.network "private_network", ip: "192.168.2.8"

#         webserver.vm.synced_folder "source/webserver", "/src", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]

#         webserver.vm.provision "shell", path: "node.sh", privileged:false 
#         webserver.vm.provision "shell", path: "webserver.sh", privileged: false
#     end


end
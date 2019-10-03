Vagrant.configure("2") do |config|
  config.vm.box = "dummy"
  
  config.vm.synced_folder "source/characterhandler", "/src"

  config.vm.provider :aws do |aws, override|
      aws.region = "us-east-1"

      override.nfs.functional = false
      override.vm.allowed_synced_folder_types = :rsync

      aws.keypair_name = "chineseroom"
      override.ssh.private_key_path = "~/.ssh/chineseroom.pem"

      aws.instance_type = "t2.micro"

      aws.security_groups = ["sg-0622fcb89e5a8b911"]

      aws.availability_zone = "us-east-1b"
      aws.subnet_id = "subnet-15d48849"

      aws.ami = "ami-04763b3055de4860b"

      override.ssh.username = "ubuntu"
  end

  config.vm.provision "shell", path: "node.sh", privileged:false 
  config.vm.provision "shell", path: "characterhandler.sh", privileged: false
  
  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end

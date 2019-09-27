# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|
  config.vm.box = "dummy"
  config.env.enable
  config.vm.provider :aws do |aws, override|
    aws.access_key_id = ENV['AWS_ACCESS_KEY_ID']
    aws.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
    aws.session_token = ENV['AWS_SESSION_TOKEN']

    aws.region = "us-east-1"

    override.nfs.functional = false
    override.vm.allowed_synced_folder_types = :rsync

    aws.keypair_name = "chineseroom"
    override.ssh.private_key_path = "~/.ssh/chineseroom.pem"

    aws.instance_type = "t2.micro"

    ##aws.security_groups = ["sg-0622fcb89e5a8b911"]

    # For Vagrant to deploy to EC2 for Amazon Educate accounts, it
    # seems that a specific availability_zone needs to be selected
    # (will be of the form "us-east-1a"). The subnet_id for that
    # availability_zone needs to be included, too (will be of the form
    # "subnet-...").
    aws.availability_zone = "us-east-1a"
    aws.subnet_id = "subnet-95fa19d8"

    aws.ami = "ami-04763b3055de4860b"

    override.ssh.username = "ubuntu"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update
  #   apt-get install -y apache2
  # SHELL
end

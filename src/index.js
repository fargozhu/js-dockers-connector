var request = require('request');

module.exports = {
	createContainer: function(baseuri, data, next) {
		request(
		{
			uri: baseuri + '/containers/create',
			method: 'POST',
			qs: {
				name: data.appName
			},
			body: {
				'Hostname' : '',
				'Domainname' : '',
				'User' : '',
				'AttachStdin' : false,
				'AttachStdout' : false,
				'AttachStderr' : false,
				'ExposedPorts' : {
					'3001/tcp' : {},
					'8701/tcp' : {}
				},
				'Tty' : false,
				'OpenStdin' : false,
				'StdinOnce' : false,
				'Env' : [],
				'Cmd' : null,
				'Image' : 'strongloop/strong-pm',
				'Volumes' : {
					'/home/strong-pm' : {}

				},
				'WorkingDir' : '',
				'Entrypoint' : null,
				'OnBuild' : null,
				'Labels' : {},
				'StopSignal' : 'SIGTERM',
				'HostConfig' : {
					'Binds' : null,
					'ContainerIDFile' : '',
					'LogConfig' : {
						'Type' : '',
						'Config' : {}
					},
					'NetworkMode' : 'default',
					'PortBindings' : {
						'3001/tcp' : [{
								'HostIp' : '',
								'HostPort' : ''
							}
						],
						'8701/tcp' : [{
								'HostIp' : '',
								'HostPort' : ''
							}
						]
					},
					'RestartPolicy' : {
						'Name' : 'always',
						'MaximumRetryCount' : 0
					},
					'VolumeDriver' : '',
					'VolumesFrom' : null,
					'CapAdd' : null,
					'CapDrop' : null,
					'Dns' : [],
					'DnsOptions' : [],
					'DnsSearch' : [],
					'ExtraHosts' : null,
					'GroupAdd' : null,
					'IpcMode' : '',
					'Links' : null,
					'OomScoreAdj' : 0,
					'PidMode' : '',
					'Privileged' : false,
					'PublishAllPorts' : false,
					'ReadonlyRootfs' : false,
					'SecurityOpt' : null,
					'UTSMode' : '',
					'ShmSize' : 0,
					'ConsoleSize' : [0, 0],
					'Isolation' : '',
					'CpuShares' : 0,
					'CgroupParent' : '',
					'BlkioWeight' : 0,
					'BlkioWeightDevice' : null,
					'BlkioDeviceReadBps' : null,
					'BlkioDeviceWriteBps' : null,
					'BlkioDeviceReadIOps' : null,
					'BlkioDeviceWriteIOps' : null,
					'CpuPeriod' : 0,
					'CpuQuota' : 0,
					'CpusetCpus' : '',
					'CpusetMems' : '',
					'Devices' : [],
					'KernelMemory' : 0,
					'Memory' : 524288000,
					'MemoryReservation' : 0,
					'MemorySwap' : 0,
					'MemorySwappiness' : -1,
					'OomKillDisable' : false,
					'PidsLimit' : 0,
					'Ulimits' : null
				},
				'NetworkingConfig' : {
					'EndpointsConfig' : {}
				}
			},
			json: true
		},function(err, response, body) {
				if (err)
					next(err);
				else
					next(null, response, body);
			}
		);
	},
	deleteContainer: function(baseuri, data, next) {
		request(
		{
			uri: baseuri + '/containers/' + data.appName,
			method: 'DELETE'
		},function(err, response, body) {
				if (err)
					next(err);
				else
					next(null, response, body);
			}
		);
	},
	startContainer: function(baseuri, data, next) {
		request(
		{
			uri: baseuri + '/containers/' + data.appName + '/start',
			method: 'POST'
		},function(err, response, body) {
				if (err)
					next(err);
				else
					next(null, response, body);
			}
		);
	},
	stopContainer: function(baseuri, data, next) {
		request(
		{
			uri: baseuri + '/containers/' + data.appName + '/stop',
			method: 'POST'
		},function(err, response, body) {
				if (err)
					next(err);
				else
					next(null, response, body);
			}
		);
	},
	getContainer: function(baseuri, data, next) {
		request(
		{
			uri: baseuri + '/containers/' + data.appName + '/json',
			method: 'GET'
		},function(err, response, body) {
				if (err)
					next(err);
				else
					next(null, response, body);
			}
		);
	}
};

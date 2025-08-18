<?php 
namespace Builder;

use App\Models\Interfaces\IDatabaseBuilder;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class DockerDatabase implements IDatabaseBuilder {
  
  private DatabaseConfig $config;

  public function __construct(DatabaseConfig $config)
  {
      $this->config = $config;
      //TODO:: Do I need to implement a singleton pattern as well?
      Config::set('database.connections.dynamic_connection', [
          'driver'    => $this->config->driver,
          'host'      => $this->config->host,
          'port'      => $this->config->port,
          'database'  => $this->config->database,
          'username'  => $this->config->username,
          'password'  => $this->config->password,
          'charset'   => 'utf8mb4',
          'collation' => 'utf8mb4_unicode_ci',
          'prefix'    => $this->config->prefix,
          'strict'    => true,
          'engine'    => null,
      ]);

      //Clear cache.
      DB::purge('dynamic_connection');
  }

  public function SetSettings(): string { return $this->config->database; }

  public function BuildConnection()
  {
      return DB::connection('dynamic_connection');
  }

  public function BuildCommand() {}
 
}

  



?>

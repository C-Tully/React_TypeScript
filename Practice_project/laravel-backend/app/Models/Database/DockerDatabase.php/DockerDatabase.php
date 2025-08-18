<?php 
namespace Builder;

use App\Models\Interfaces\IDatabaseBuilder;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class DockerDatabase implements IDatabaseBuilder {
  
  private DatabaseConfig $config;

  public function __construct()
  {
      $this->config = $config;
      
      Config::set('database.connections.dynamic_connection', [
         'driver'    => env('DOCKER_DB_DRIVER', 'mysql'),
            'host'      => env('DOCKER_DB_HOST', '127.0.0.1'),
            'port'      => env('DOCKER_DB_PORT', 3306),
            'database'  => env('DOCKER_DB_NAME', 'forge'),
            'username'  => env('DOCKER_DB_USER', 'forge'),
            'password'  => env('DOCKER_DB_PASS', ''),
            'charset'   => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix'    => '',
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

  public function getTop5Posts() {
    
  }
 
}

  



?>

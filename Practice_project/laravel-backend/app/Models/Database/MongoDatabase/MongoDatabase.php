<?php
  namespace Builder;
  
  use App\Models\Interfaces\IDatabaseBuilder;
  
  use Illuminate\Support\Facades\Config;
  use Illuminate\Support\Facades\DB;
  
  class MongoDatabase implements IDatabaseBuilder {
    
    private DatabaseConfig $config;
  
    public function __construct()
    {
        $this->config = $config;
        
        Config::set('database.connections.dynamic_connection', [
           'driver'    => env('MONGO_DB_DRIVER', 'mysql'), //What should this be for Mongo?
              'host'      => env('MONGO_DB_HOST', '127.0.0.1'),
              'port'      => env('MONGO_DB_PORT', 3306),
              'database'  => env('MONGO_DB_NAME', 'forge'),
              'username'  => env('MONGO_DB_USER', 'forge'),
              'password'  => env('MONGO_DB_PASS', ''),
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
   
  }
?>
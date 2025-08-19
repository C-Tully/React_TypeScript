<?php 
namespace App\Builder;

/**
 *  This isn't used at the moment, but I've left it in
 *  As an example of typing an input similar to TypeScript
 *  We use this class as a param (see BusinessLogicController.php)
 *  $database = new DockerDatabase($databaseConfig);
 */

class DatabaseConfig
{
    public function __construct(
        public string $driver,
        public string $host,
        public int $port,
        public string $database,
        public string $username,
        public string $password,
        public string $prefix = '',
    ) {}
}
?>
<?php 
namespace App\Builder;

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
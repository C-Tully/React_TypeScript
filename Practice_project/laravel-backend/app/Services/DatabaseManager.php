<?php

namespace App\Services;

use App\Models\Database\MongoDB\MongoDatabase;
use App\Models\Database\DockerDatabase\DockerDatabase;
use App\Models\Database\Interfaces\DatabaseBuilder;

class DatabaseManager
{
    public static function make(string $driver = 'mysql'): DatabaseBuilder
    { //Match as of php 8.0
        return match($driver) {
            'docker' => new DockerDatabase(),
            'mongo' => new MongoDatabase(),
            default => throw new \Exception("Unsupported database driver [$driver]"),
        };
    }
}

<?php
namespace App\Builder;

interface IDatabaseBuilder {
  public function BuildConnection(): void;
  public function BuildCommand(): void;
  public function SetSettings(): string;
  
};

?>
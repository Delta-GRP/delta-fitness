<?php declare(strict_types=1);

 class ConnectDatabase
{
    private $connection;
    private $hostname;
    private $username;
    private $password;
    private $database;

    function __construct()
    {
        $this->hostname = 'localhost';
        $this->username = 'root';
        $this->password = '';
        $this->database = 'delta_fitness_db';
    }


    function connect_db(): mysqli
    {
        $this->connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database);
        if ($this->connection->connect_error) {
            echo 'Failed to connect to database; error: ' + $this->connection->connect_error;
        }
        return $this->connection;
    }

    function close_connection(): bool
    {
        return mysqli_close($this->connection);
    }
}

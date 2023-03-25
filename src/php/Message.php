<?php

namespace Tiago\Portfolio\php;

class Message
{
    public function __construct(private string $name = '',
    private string $email = '',
    private string $phone = '',
    private string $prefer_contact = '',
    private string $message = '')
    {}

    public function __get($attr)
    {
        return $this->$attr;
    }

    public function __set($attr, $valor)
    {
        $this->$attr = $valor;
    }

    public function validMessage()
    {
        if (empty($this->name) || empty($this->email) || empty($this->phone || empty($this->message))) {
            return false;
        }

        return true;
    }
}
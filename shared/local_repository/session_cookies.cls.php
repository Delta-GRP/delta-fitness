<?php
class SessionCookies
{
    function startSection()
    {
        ini_set('session.cookie_lifetime', 60 * 60 * 24 * 7);
        ini_set('session.gc_maxlifetime', 60 * 60 * 24 * 7);
        ini_set('session.save_path', 'C:\xampp\htdocs\session');
        session_start();
    }
}

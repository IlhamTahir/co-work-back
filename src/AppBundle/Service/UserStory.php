<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 11/23/17
 * Time: 9:29 AM
 */

namespace AppBundle\Service;

interface UserStory
{
    public function getUserStory($id);

    public function createUserStory($project);

    public function searchUserStories($conditions);
}

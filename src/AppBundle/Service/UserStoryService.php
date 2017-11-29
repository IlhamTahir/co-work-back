<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 11/23/17
 * Time: 9:29 AM
 */

namespace AppBundle\Service;

interface UserStoryService
{
    public function getUserStory($id);

    public function createUserStory($userStory);

    public function searchUserStories($conditions);
}

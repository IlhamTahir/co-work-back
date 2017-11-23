<?php

namespace ApiBundle\Api\Resource\UserStory;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;

class UserStory extends AbstractResource
{
    /**
     * @ApiConf(isRequiredAuth=false)
     * @param $id
     */
    public function get($id)
    {
        return $id;
    }

    public function add(ApiRequest $request)
    {
        $project = $request->request->all();
        return $this->getUserStoryService()->createUserStory($project);
    }

    public function search(ApiRequest $request)
    {
        return $this->getUserStoryService()->searchUserStories(array());
    }

    private function getUserStoryService()
    {
        return $this->getContainer()->get('app.user_story');
    }
}

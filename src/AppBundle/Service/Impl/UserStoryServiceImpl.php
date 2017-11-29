<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 11/23/17
 * Time: 9:30 AM
 */

namespace AppBundle\Service\Impl;

use AppBundle\AppBundle;
use AppBundle\Service\BaseService;
use AppBundle\Service\UserStoryService;
use AppBundle\Entity\UserStory;
use Symfony\Component\Serializer\Serializer;
class UserStoryServiceImpl extends BaseService implements UserStoryService
{
    public function createUserStory($userStory)
    {
        // TODO: Implement createUserStory() method.
        $data = new UserStory();
        $data->setUserStory('这是一个用户故事')
            ->setBusinessAnalys('段坤')
            ->setPriority(10)
            ->setProductManager('刁哥')
            ->setOwner('依力');
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();
        return $data;
    }

    public function getUserStory($id)
    {
        // TODO: Implement getUserStory() method.
    }

    public function searchUserStories($conditions)
    {
        // TODO: Implement searchUserStories() method.
        $em = $this->getDoctrine()->getManager();
        $userStories = $em->getRepository('AppBundle:UserStory')->children();
        $serilize = new Serializer();
        foreach ($userStories as $key => $userStory) {
            $userStories[$key] = $serilize->normalize($userStory);
        }
        return $userStories;
    }
}

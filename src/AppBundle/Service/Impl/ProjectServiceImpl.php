<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 8/9/17
 * Time: 6:37 PM
 */

namespace AppBundle\Service\Impl;

use AppBundle\Entity\Project;
use AppBundle\Service\BaseService;
use AppBundle\Service\ProjectService;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;


class ProjectServiceImpl extends BaseService implements ProjectService
{

    public function getProject($id)
    {
        // TODO: Implement getProject() method.
    }

    public function createProject($project)
    {
        // TODO: Implement createProject() method.
        $data = new Project();
        $data->setName($project['name'])
            ->setDescription($project['description'])
            ->setIsArchived(0)
            ->setCreatedTime(time())
            ->setUpdatedTime(time());
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();
        return $data;
    }

    public function searchProjects($conditions)
    {
        // TODO: Implement searchProjects() method.
        $em = $this->getDoctrine()->getManager();
        $projects = $em->getRepository('AppBundle:Project')->findAll();
        foreach ($projects as $key => $project) {
            $projects[$key] = $this->normalize($project);
        }
        return $projects;
    }
}

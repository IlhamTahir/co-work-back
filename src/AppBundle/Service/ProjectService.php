<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 8/9/17
 * Time: 4:28 PM
 */

namespace AppBundle\Service;

use AppBundle\Entity\Project;

interface ProjectService
{
    public function getProject($id);

    public function createProject($project);

    public function searchProjects($conditions);
}

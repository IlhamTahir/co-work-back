<?php

namespace ApiBundle\Api\Resource\Project;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Exception\ErrorCode;
use ApiBundle\Api\Resource\AbstractResource;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Project extends AbstractResource
{
    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function get(ApiRequest $request, $id)
    {
        return $id;
    }

    public function add(ApiRequest $request)
    {
        $project = $request->request->all();
        $this->getProjectService()->createProject($project);
        return true;
    }

    public function search(ApiRequest $request)
    {
        return $this->getProjectService()->searchProjects(array());
    }

    private function getProjectService()
    {
        return $this->getContainer()->get('app.project');
    }
}

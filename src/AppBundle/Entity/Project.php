<?php
/**
 * Created by PhpStorm.
 * User: ilham
 * Date: 8/9/17
 * Time: 12:52 PM
 */

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class Project
 * @ORM\Entity
 * @ORM\Table(name="project")
 *
 */
class Project
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string")
     */
    protected $name;

    /**
     * @ORM\Column(type="text")
     */
    protected $description;

    /**
     * @ORM\Column(type="integer")
     */
    protected $isArchived;

    /**
     * @ORM\Column(type="integer")
     */
    protected $createdTime;

    /**
     * @ORM\Column(type="integer")
     */
    protected $updatedTime;
}
